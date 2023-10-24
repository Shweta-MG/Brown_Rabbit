const coffeeItems = [
    {
        title: 'Wonderful Copenhagen 2021',
        imageSrc: '../src/assets/images/posts/coffee-1.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
        altText: 'Coffee cups'
    },
    {
        title: 'The most expensive coffee on the Danish market',
        imageSrc: '../src/assets/images/posts/coffee-2.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
        altText: 'A hand holding hot coffee cup'
    },
    {
        title: '10 type of danish coffee beans you need to know',
        imageSrc: '../src/assets/images/posts/coffee-3.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
        altText: 'Coffee beans'
    },
    {
        title: 'Challenge your barista skills to the max in Denmark',
        imageSrc: '../src/assets/images/posts/coffee-4.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
        altText: 'Coffee mugs'
    },
    {
        title: 'Wonderful Hamburg 2022',
        imageSrc: '../src/assets/images/posts/coffee-5.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
        altText: 'Coffee cups'
    },
    {
        title: 'The most expensive coffee on the German market',
        imageSrc: '../src/assets/images/posts/coffee-6.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
        altText: 'A hand holding hot coffee cup'
    },
    {
        title: '10 type of german coffee beans you need to know',
        imageSrc: '../src/assets/images/posts/coffee-7.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
        altText: 'Coffee beans'
    },
    {
        title: 'Challenge your barista skills to the max in Germany',
        imageSrc: '../src/assets/images/posts/coffee-8.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
        altText: 'Coffee mugs'
    },
    {
        title: 'Wonderful Bremen 2023',
        imageSrc: '../src/assets/images/posts/coffee-9.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
        altText: 'Coffee cups'
    },
    {
        title: 'The most expensive coffee on the European market',
        imageSrc: '../src/assets/images/posts/coffee-10.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
        altText: 'A hand holding hot coffee cup'
    },
    {
        title: '10 type of european coffee beans you need to know',
        imageSrc: '../src/assets/images/posts/coffee-11.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
        altText: 'Coffee beans'
    },
    {
        title: 'Challenge your barista skills to the max in India',
        imageSrc: '../src/assets/images/posts/coffee-12.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
        altText: 'Coffee mugs'
    },
    {
        title: 'Wonderful Bremen 2023',
        imageSrc: '../src/assets/images/posts/coffee-13.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
        altText: 'Coffee cups'
    },
    {
        title: 'The most expensive coffee on the European market',
        imageSrc: '../src/assets/images/posts/coffee-14.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
        altText: 'A hand holding hot coffee cup'
    },
    {
        title: '10 type of Indian coffee beans you need to know',
        imageSrc: '../src/assets/images/posts/coffee-15.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
        altText: 'Coffee beans'
    },
    {
        title: 'Challenge your barista skills to the max in India',
        imageSrc: '../src/assets/images/posts/coffee-16.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
        altText: 'Coffee mugs'
    }
];
