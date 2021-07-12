<template>
  <button @click="initializePaystack()">Pay With Paystack</button>
</template>

<script>
export default {
  name: 'Demo',
  methods: {
    initializePaystack() {
      this.$paystack({
        key: '', // Replace with your public key
        email: '',
        amount: 0,
        ref: '',
        currency: '',
        callback: () => {
          // Do something.
        },
        onClose: () => {
          // Do something.
        }
      })
    }
  }
}
</script>

<style scoped>
button {
  display: block;
  border-radius: 4px;
  background-color: #08a4da;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 1.3rem;
  padding: 14px;
  width: 300px;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  cursor: pointer;
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-48%, -50%);
}

button:hover {
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.24), 0 1px 10px 0 rgba(0, 0, 0, 0.19);
}
</style>
