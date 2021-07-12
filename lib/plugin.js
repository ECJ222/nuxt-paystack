const loadScript = (callback) => {
  const script = document.createElement('script')
  script.defer = true
  script.src = 'https://js.paystack.co/v1/inline.js'

  // Add script to document head
  document.getElementsByTagName('head')[0].appendChild(script)

  if (script.readyState) {
    // IE support
    script.onreadystatechange = () => {
      if (script.readyState === 'complete') {
        script.onreadystatechange = null
        callback()
      }
    }
  } else {
    // Others
    script.onload = () => {
      callback()
    }
  }
}

const scriptLoaded = new Promise((resolve) => {
  loadScript(() => {
    resolve()
  })
})

export default (ctx, inject) => {
  inject('paystack', (args) => {
    if (args) {
      if (typeof args === 'object') {
        scriptLoaded.then(() => {
          const handler = window.PaystackPop.setup(args)
          handler.openIframe()
        })
      } else {
        console.error('$paystack() argument must be an object.')
      }
    } else {
      console.error('$paystack() requires one argument.')
    }
  })
}
