const app = Vue.createApp(
    {
        data: function() {
            return {
                product: 'Socks',
                description: 'A pair of warm, fuzzy socks',
                image: './assets/images/socks_green.jpg',
                inStock: true,
                inventory: 100,
                onSale: true,
                details: ['50% cotton', '30% wool', '20% polyester'],
                sizes: ['S', 'M', 'L'],
                variants: [
                    { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                    { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
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
            updateImage: function(image) {
                this.image = image
            },
        }
    }
)
const product = 'Socks'
