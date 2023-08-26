const { extendTheme } = require("@chakra-ui/react");

const theme = extendTheme({
    components: {
        Heading: {
            variants: {
                'primary': {
                    fontFamily: 'Markazi Text',
                },
                'secondary': {
                    fontFamily: 'Karla',
                },
            },
        },
        Button: {
            variants: {
                'primary': {
                    background: "#F4CE14",
                    color: "#495E57",
                    _hover: {
                        background: "#fde56d",
                        color: "#495E57",
                    }
                },
                'primaryReverse': {
                    background: "#557067",
                    color: "#F4CE14",
                    _hover: {
                        background: "#F4CE14",
                        color: "#495E57",
                    }
                },
                'primaryGhost': {
                    background: "transparent",
                    color: "#495E57",
                    _hover: {
                        background: "#557067",
                        color: "#F4CE14",
                    }
                },
                'primaryOutline': {
                    background: "transparent",
                    color: "#495E57",
                    border: "1px solid",
                    borderColor: "var(--chakra-colors-gray-200)",
                    _hover: {
                        background: "#557067",
                        color: "#F4CE14",
                    }
                },
            }
        },
    },
    colors: {
        primary: {
            green: "#495E57",
            yellow: "#F4CE14",
            bg: "#fbfbfb",
        },
        secondary: {
            red: "#EE9972",
            orange: "#FBDABB",
            bg: "#f6f9f9",
        },
        highlight: {
            white: "#EDEFEE",
            black: "#333333",
        }
    },
    styles: {
        global: {
            // styles for the `body`
            h1: {
                fontFamily: 'Markazi Text',
                fontWeight: '700',
                fontSize: '64pt',
            },
            h2: {
                fontFamily: 'Markazi Text',
                fontWeight: '500',
                fontSize: '40pt',
            },
            h3: {
                fontFamily: 'Markazi Text',
                fontWeight: '500',
                fontSize: '32pt',
            },
            h4: {
                fontFamily: 'Markazi Text',
                fontWeight: '400',
                fontSize: '24pt',
            },
            p: {
                fontFamily: 'Karla',
                fontWeight: '300',
                fontSize: '16pt',
                lineHeight: '1.5'
            },
        },
    },
})

export default theme;