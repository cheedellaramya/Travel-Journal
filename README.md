## Travel-journal:red_car:
* ### App
    The App component is the main component that renders other components. It imports the Card, Navbar, Data, and image files. It also maps over the Data array and passes the data to the Card component as props.

* ### Navbar
    The Navbar component displays the title and image of the app. It takes an image as a prop and displays it on the left of the title.

* ### Card
    The Card component is used to display each travel destination. It takes an object containing details of the travel destination and an image as props. The object contains the following properties: location, title, description, startDate, endDate, and googleMapsUrl. The component renders the location details on the left side and the destination details on the right side.

* ### Images
    The images directory contains the images used in the app. The earth-logo.jpg image is used in the Navbar component and the location-logo.jpg image is used in the Card component.

* ### Styles
    The App.css file contains the styles used in the app. The styles are applied to the components using CSS classes.

* ### Data
    The Data file contains an array of objects with details of the travel destinations. The array is used to dynamically generate the Card components. Each object in the array contains the following properties: location, title, description, startDate, endDate, and googleMapsUrl.

* ### Conclusion
    This app is a simple travel journal app built with React. It can be used as a starting point for building more complex apps that require dynamic rendering of components.


##### Install the dependencies 
```
npm install

```

##### Start the development server
```
npm start

```