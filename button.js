Vue.component('i-button', {
    data: function () {
        return {
          count: 0
        }
    },
    template: '<button class="i-button"><slot/></button>'
})