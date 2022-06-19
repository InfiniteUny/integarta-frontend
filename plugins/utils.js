/* eslint-disable */
export default ({ app }, inject) => {
  const numberToLocaleString = (number) => {
    return (Number(number) || 0).toLocaleString('id-ID')
  }

  const getDays = (items) => {
    const input = 1000000

    const data = items.map(item => ({
      id: item.id,
      name: item.name,
      percentage: item.percentage,
      temp_percentage: null,
      amount: item.expense,
      amount_complete: item.temp_expense,
      days: 0
    }))

    for (const item of data) {
      const sorted = data.filter(item => item.amount_complete < item.amount).sort((a, b) => {
        const aWeight = a.amount * 100 / a.percentage
        const bWeight = b.amount * 100 / b.percentage
        if (aWeight > bWeight) {
          return 1
        } else if (aWeight < bWeight) {
          return -1
        } else {
          return 0
        }
      })

      const current = sorted[0]
      const remainingAmount = current.amount - current.amount_complete

      const totalInput = input * current.percentage / 100
      const totalDays = Math.ceil(remainingAmount / totalInput)

      current.amount_complete = current.amount
      current.days += totalDays

      const otherItems = sorted.slice(1)
      const totalRemainingPercentage = otherItems.reduce((total, item) => total + item.percentage, 0)
      otherItems.forEach(function (item) {
        item.days += totalDays
        item.amount_complete += (totalDays * (item.percentage * input / 100))
        item.percentage = current.percentage * (item.percentage / totalRemainingPercentage) + item.percentage
      })
    }

    items.forEach(function (item) {
      item.days = data.find(v => v.id === item.id).days
    })
  }

  inject('utils', { numberToLocaleString, getDays })
}
