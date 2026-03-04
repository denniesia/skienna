## Skienna 


### Link to APK
https://drive.google.com/file/d/1147wsmtjY9cR7u7JMaaq6mbbsLuDuIdP/view?usp=sharing

## Walkthrough Tutorial (optional)
*give simple directions on how to navigate, login and use the main app features*

## Installation Guide
*prerequisites*
*steps needed to install and run project locally*

## Functional Guide
1. Project Overview
 - *Application Name*: **Skienna**
 - *Application Category / Topic*: **Beauty & Wellness** , ** Skincare Routine tracker**
 - *Main Purpose*: **Keeping track of your daily skincare routines. Additionally user can add their skincare products and include them into their routines.**
---
2. User Access & Permissions
- Guest (Not Authenticated) - Unauthenticated user dont have access to the Main App. They can only access Login and Register Screens.
  
- Authenticated User - Authenticated user can access all of the screens. They can add Routines and products. Furthermode they can edit and delete the existing routines and products. They also have access to their profile screen, where different data like count of products, routines and already done routines are displayed. Authenticated users can access the Today screen, where a calendar is displayed to support routine tracking. Through the calendar, users can view past dates and check whether their routines were completed or missed.
---
3. Authentication & Session Handling
- Authentication Flow
- Explain step-by-step: 1. What happens when the app starts 2. How authentication status is checked 3. What happens on successful login or registration 4. What happens on logout
When the app launches:
1. The app initializes Firebase.
2. Firebase Authentication automatically checks for an existing authenticated session.
3. A loading screen is displayed while authentication status is being verified.
- If a valid user session exists → User is redirected to the Today screen.
- If no authenticated user is found → User is redirected to the Login  screen.

Authentication status is checked using Firebase’s built-in session persistence. Firebase stores the user session securely (locally on the device). When the app loads, Firebase restores the session (if it exists).

When a user logs in or registers:
User submits email and password. Firebase Authentication validates credentials.

If successful:
A user account is created (if registering).
A secure authentication token is generated.
Firebase returns a User object.
The app stores the session automatically (handled by Firebase).

If this is a new user:
A user document is created in Firestore.
User is redirected to the Today screen.

When a user logs out:
The app calls signOut() from Firebase Authentication. Firebase removes the local session and authentication token. The user is redirected to the Login screen. The user can no longer access protected screens.
A new login is required to access the app again.

- Session Persistence
Firebase Authentication is configured using getReactNativePersistence(AsyncStorage) in firebase.js, which enables session persistence through AsyncStorage. This ensures that the user’s authentication state is stored locally on the device.

When the app starts, the AuthProvider listens to onAuthStateChanged. If a valid session exists in AsyncStorage, Firebase restores the authenticated user and returns the existing user object. As a result, the app automatically logs the user in without displaying the login screen.

---
4. Navigation Structure
Root Navigation Logic
The app separates navigation into two main flows:
- Unauthenticated Flow (Auth Stack).
- Authenticated Flow (Main App Stack / Bottom Tab Navigator).
This ensures that only logged-in users can access protected features like products, routines, and tracking.


If the user is not logged in, the app displays the Authentication Navigator.
Screens Included:
- Login Screen
- Registration Screen
Behavior:
- User can log in or create an account.
- No access to main app features.
- Protected screens (Today, Products, Routines, etc.) are not accessible.
- 
Navigation example structure:

 ```tree
AuthStack
 ├── Login
 └── Register
```
If the user is logged in, the app displays the Main App Navigator. The App Navigator is Bottom Tab Navigator and includes several nested Navigators.

 ```tree
AppNavigator
 ├── Today
 └── Products
 └── Routines
 └── Profile
```

The Nested Today Navigator is a Stack Navigator and includes Screens that are important for the managing of screens that are displayed on the Today page which is the main page for this app. 

 ```tree
TodayNavigator
 ├── Today Screen
 └── Product Details Screen
 └── Product Edit Screen
 └── Routine Details Screen 
 └── Routine Edit Screen
```

The Nested Products Navigator is a nested Stack Navigator. 

 ```tree
ProductsNavigator
 ├── Products Stack Screen
 └── Add Product Screen
 └── Product Details Screen
 └── Product Edit Screen
```

The Nested Routine Navigator is a nested Stack Navigator. It also includes some ProductNavigator screens to faciliate smooth flow. 

 ```tree
RoutineNavigator
 ├── Routines Stack Screen
 └── Add Routine Screen
 └── Routine Details Screen
 └── Routine Edit Screen
 └── Product Edit Screen
 └── Product Details Screen
```

---
5. List → Details Flow
- List / Overview Screen
* What type of data is displayed?
* How does the user interact with the list?
- Details Screen
* How is navigation triggered?
* What data is received via route parameters?
---
6. Data Source & Backend
- Backend Type - Real backend (Firebase)

---
7. Data Operations (CRUD)
- Describe the implemented data operations:
- Read (GET)
* Where is data fetched and displayed?
- Create (POST)
* How does the user create new data?
- Update / Delete (Mutation)
* Which operation is implemented (Update and/or Delete)?
* How is the UI updated after the change?
---
8. Forms & Validation
- Forms Used
---
9. List all forms in the application:
- Validation Rules
- Describe at least three validated fields: - Field name and rules: - Field name and rules: - Field name with multiple validation rules:
---
1.  Native Device Features
- Used Native Feature(s)
Camera and Image Picker (via Expo Image Picker)

The Camera / Image Picker feature is used in the Add Product screen.
When a user adds a new skincare product to their product library, they have the option to:
- Take a photo using the device camera
- Select an existing photo from their phone’s gallery

User Experience Benefits
- Makes product entries more personalized
- Creates a more familiar and visually engaging experience
- Helps users easily recognize products at a glance
- Improves organization by visually distinguishing similar products

---
1.  Typical User Flow
- Describe a normal user journey through the app: 1. 2. 3. 4.
---
1.  Error & Edge Case Handling
- Describe how the app handles: - Authentication errors - Network or data errors - Empty or missing data states
---


