# Simple Ecommerce App  ( Search and PDP pages ) 
- Open the Application: https://my-e-commerce-rouge.vercel.app/

## Search Functionality:
- Search for "shoes" or other categories.
- Filter by Category: Try filtering directly via SSR by opening this link, which automatically filters search results for category ID 2.
  
## Product Details Page (PDP):
- Click on any item from the search results to load the Product Details Page (PDP) as an SPA.
- SSR Example: Load the PDP directly via SSR by opening this link.


## Archeticture Link
https://miro.com/app/board/uXjVLJS7wv8=/?share_link_id=946123473509



## Features
## Mixed rendering mechanism 
Our eCommerce application uses a mixed rendering approach, dynamically switching between Single-Page Application (SPA) and Multi-Page Application (MPA) rendering based on the user’s workflow to optimize both performance and user experience.

## Enhanced Search Functionality:
Supports category-based search with a custom debounced function that efficiently fetches products as the user inputs a category.
Debouncing is custom-implemented, minimizing unnecessary API calls and enhancing performance for real-time searches.

## Accessibility-First Approach:
Ensures that all components and interactions are accessible, adhering to web accessibility standards.
Optimized navigation and usability for all users, including those relying on assistive technologies.

## Component Testing with Jest:
Uses Vitest for simple, efficient component testing.
Uses @testing-library/jest-dom for assertion, ensuring UI components behave as expected and improving maintainability.

## Abstract Data Access Layer:
Contains a custom created abstracted data access layer to handle entities generically, enabling easy extension and reuse across different parts of the application. I prefered creating custom composable for data access instead of using nuxt  usefetch one for practice
