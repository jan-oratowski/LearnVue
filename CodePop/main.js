const app = Vue.createApp(
    {
        data: function() {
            return {
                product: 'Socks',
                brand: 'Vue Mastery',
                description: 'A pair of warm, fuzzy socks',
                inventory: 100,
                onSale: true,
                selectedVariant: 0,
                details: ['50% cotton', '30% wool', '20% polyester'],
                sizes: ['S', 'M', 'L'],
                variants: [
                    { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                    { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
                ],
                cart: 0,
            }
        },
        methods: {
            addToCart: function() {
                this.cart += 1
            },
            removeFromCart: function() {
                this.cart -= 1
            },
            updateVariant: function(index) {
                this.selectedVariant = index
            },
        },
        computed: {
            title() {
                return this.brand + ' ' + this.product
            },
            image() {
                return this.variants[this.selectedVariant].image
            },
            inStock() {
                return this.variants[this.selectedVariant].quantity
            },
        }
    }
)
const product = 'Socks'
