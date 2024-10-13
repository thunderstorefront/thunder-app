import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import TailwindTypography from '@tailwindcss/typography';

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Red Hat Display', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [TailwindTypography]
};
