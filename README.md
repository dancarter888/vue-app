# Venues Otautahi – Events Page

This project was created using the Vue-CLI (Vue3) and tailwind. Dummy data was supplied to this project via the user of faker.js. The multiple sections I will be discussing are:
• Responsive Design
• Components
• Data Modelling
• Filter Expand Animation
• Event Grid
• Obtaining Chosen Filters
• Applying Chosen Filters
• Loading More Events

### Responsive Design

This project has breakpoints at 360px (Mobile), 800px (Tablet), 1440px(Desktop). All responsive features shown from the initial figma design have been reflected in this project using tailwind’s custom breakpoint functionality. Columns are used to position elements. The corresponding amount of columns to breakpoints are as follows. Mobile-12, Tablet-20, Desktop-36.

### Components

These are the components I broke the page into:
App – This is the overarching component which stores all of the other components. This deals with fetching data from faker.js and modelling it into objects as well as extracting relevant filter parameters and modelling them too . These objects are able to be passed to other components as props. For instance, passing the selected filters to the Events component so that it is able to filter the applicable events and display them.
Navbar – This is the sticky navbar which shows the search bar, venues logo and hamburger icon.
Searchbar – The searchbar is a styled input.
Hamburger – The hamburger icon consists of 3 horizontal lines.
Main – This is the main landing component. It displays an image carousel which is implemented using Swiper as it is one of the few image carousel plugins compatible with Vue3. It also shows a pagination indicator symbolizing which image you are viewing.
FilterHeader – This is the header containing the title filter and the show/hide filter button.
Filters – These are the filters what are revealed when the show/hide filter button is clicked.
FilterGroup – A group of filters, each filtering a different category.
Filter – A single filter.
Events – All the “Events” collected using faker.js to be displayed.
EventGrid – The dynamic grid that changes based on the screen size. At mobile it there is 1 item per row at tablet - 2 and at desktop - 3.
Event – A single event with a title, image and other information
Footer – The footer of the page with links and info.
SignUp – Small form allowing input on email address.

### Data Modelling

The data is fetched from faker.js’s vehicle api. New data is fetched once every time the site is built. The data is modelled into an array of objects each containing a vehicle name, manufacturer, color, type, model, and image. It currently fetches 30 different sets of data, but this is able to be changed by modifying the DATA_SIZE variable. Filters for manufacturer, type and set are able to be extracted from these sets of data. The filters object contains 3 empty sets for each filter group. The sets are then populated using the fetched data’s corresponding property. A set is used so that none of the filters are repeated.

### Filter Expand Animation

I wanted to created the effect that the filters were hiding under the rest of the page and that when it was expanded, the rest of the page shifted down revealing the filters. I did this using only tailwind transitions. I made the Filters component absolute and placed it under the rest of the page using the z-index of 0. I then used an invisible div with a height of 0px to sit between the FilterHeader and the rest of the page (EventGrid). When the show filter button is clicked, the page first checks what the height of the Filters component is (as this will change based on the size of screen) and then sets the height of the invisible div to the Filters height. Tailwind transitions are used to make this look smooth.

### Event Grid

This needs to change based on the breakpoints. Essentially, a subset grid is created from the main grid. Then, every object is iterated through and is styled so that it takes up (spans) a certain number of columns. It needs to span extra columns either side as the hover effect needs to span those columns. Every event needs to be styled exactly the same and in such a way that they wrap around the grid perfectly when there is an overflow.
Mobile (1 per row) – The grid contains 12 columns. The subset grid contains 12 columns. Each event spans 12 columns. The content of each event will then span 10 columns so there is one free column either size.
Tablet (2 per row) – The grid contains 20 columns. The subset grid starts at the 2nd column of the main grid and spans 18 columns, therefore the subset grid contains 18 columns. Each event spans 9 columns. The content of each event will then span 7 columns so there is one free column either size.
Desktop (3 per row) – The grid contains 36 columns. The subset grid starts at the 2nd column of the main grid and spans 33 columns, therefore the subset grid contains 33 columns. Each event spans 11 columns. The content of each event will then span 8 columns so there is one free column on the left and 2 free columns on the right.
Obtaining Chosen Filters
The filters are passed to the Filters component as a prop. Every Filter component emits a the event “checked” or “unChecked”. This is emitted to FilterGroup which emits to Filters which emits to App. The filters are then handled processed within App.

### Applying Chosen Filters

The data from faker.js is passed in as a prop to Events. Along with this, checckedFilters is also passed to Events as a prop. The computed array eventsToLoad is computed which stores the subset of the data that matches all of the applied filters. If no events are applied, then the eventsToLoad will return the full set of data.

### Loading More Events

The initial number of events to load is 12 as it is a common multiple of 1, 2 and 3 meaning all rows will be full as all breakpoints. The number of extra events to display is stored in the variable moreToLoad. The v-for directive is used to display 12 events if there are 12 or more in the data array. Otherwise if there are less than 12, it will just display however many there are. When the load more button is clicked, it adds 12 to moreToLoad and that many events are then displayed. If there are ever less than numToLoad + moreToLoad events in the array, then however many there are will just be displayed. The watch lifecycle method is used to check when a filter is changed. When a filter is changed, moreToLoad is set to 0.

# vue-app

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
