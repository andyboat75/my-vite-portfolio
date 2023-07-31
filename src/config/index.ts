import { ref } from "vue"
// declare var require:any
// const tailwind_color = require('tailwindcss/colors')
// primary color - orange
export const ui = ref({
  // color: tailwind_color,
  toggle:{
    "base": "relative inline-flex h-5 w-9 flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",
  "rounded": "rounded-full",
  "ring": "focus-visible:ring-2 focus-visible:ring-orange-500 dark:focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",
  "active": "bg-orange-500 dark:bg-orange-400",
  "inactive": "bg-gray-200 dark:bg-gray-700",
  "container": {
    "base": "pointer-events-none relative inline-block h-4 w-4 rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200",
    "active": "translate-x-4 rtl:-translate-x-4",
    "inactive": "translate-x-0 rtl:-translate-x-0"
  },
  "icon": {
    "base": "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity",
    "active": "opacity-100 ease-in duration-200",
    "inactive": "opacity-0 ease-out duration-100",
    "on": "h-3 w-3 text-orange-500 dark:text-orange-400",
    "off": "h-3 w-3 text-gray-400 dark:text-gray-500"
  },
  "default": {
    "onIcon": null,
    "offIcon": null,
    "color": "primary"
  }
  },
  cyContainer:{
    "base": "mx-auto",
    "padding": "px-4 sm:px-6 lg:px-8",
    "constrained": "max-w-7xl"
  }
  
})


