export default ({ app }, inject) => {
  const numberToLocaleString = (number) => {
    return (Number(number) || 0).toLocaleString('id-ID')
  }

  inject('utils', { numberToLocaleString })
}
