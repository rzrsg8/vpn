import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_hello.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'MyVPN - the best VPN for you',
          description:"Get access to all the content",
          button: 'Next',
        },

         // form
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_spy.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Why use a VPN?',
          description: 'User fills in the form – the bot receives the data',
          form: [
            {
              id: 'privacy',
              placeholder: 'Protect your privacy',
              type: 'checkbox',
            },
            {
              id: 'security',
              placeholder: 'Acess blocked content',
              type: 'checkbox',
            },
            {
              id: 'other',
              placeholder: 'Other',
              type: 'checkbox',
            },
          ],
          button: 'Next',
        },
        // image
        {
          media: {
            type: 'image',
            src: import('./assets/img/fenix-games.webp'),
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'People trust us',
          description: "It's just the beginning",
          button: {
            content: "Go to paywall",
            to: '/paywall',
          },
        },

    
        // go to paywall slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_knife.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          textAlign: 'center',
          title: 'But onboarding slides are not enough...',
          description: "Let's go to Paywall",
          button: {
            content: 'Go to Paywall',
            to: '/paywall',
          },
        },
      ],
    },

    // paywall
    {
      extends: 'paywall',
      path: '/paywall',
      media: {
        type: 'sticker',
        src: import('./assets/stickers/duck_money.tgs'),
        size: 150,
      },
      shape: 'square',
      title: 'Unlocka all features',
      list: [
        'Unlimited traffic',
        'No logs',
        'No ads',
      ],
      products: [
        {
          id: '1_month_subscription',
          title: '1 month subscription',
          description: '1$/month',
          discount: '',
          price: 1,
        },
        {
          id: '1_year_subscription',
          title: '1 year subscription',
          description: '6$/month',
          discount: 'Discount 50%',
          price: 6,
        },
      ],
      mainButtonText: 'Buy for {price}',
      popup: {
        // popup for payment methods choice
        type: 'web',
      },
      links: [
        {
          text: 'Privacy policy',
          href: 'https://google.com',
        },
        {
          text: 'Terms of use',
          href: 'https://google.com',
        },
      ],
    },
  ],
});
