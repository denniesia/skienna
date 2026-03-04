## Skienna 


### Link to APK
https://drive.google.com/file/d/1RmQO2__sN1DICs5ztJIvEBieEYnLUSDB/view?usp=sharing


## Installation Guide
Before running the project locally, make sure you have the following installed:
- Node.js (v18+ recommended) and npm or yarn
- Expo CLI (if running React Native in development mode)
- Git (to clone the repository)
- Optional: Android Studio / Xcode for mobile simulator/emulator

1.  Clone the repository using git clone and the repo url 
2. Install dependencies: npm install
3. Start the development server: npm start. This will launch Expo Metro Bundler. You can run the app on iOS simulator, Android emulator, or physical device using the QR code.

## Functional Guide
1. Project Overview
 - *Application Name*: **Skienna**
 - *Application Category / Topic*: **Beauty & Wellness** , **Skincare Routine tracker**
 - *Main Purpose*: **Keeping track of your daily skincare routines. Additionally user can add their skincare products and include them into their routines.**
---
2. User Access & Permissions
- Guest (Not Authenticated) - Unauthenticated user dont have access to the Main App. They can only access Login and Register Screens.
  
- Authenticated User - Authenticated user can access all of the screens. They can add Routines and products. Furthermode they can edit and delete the existing routines and products. They also have access to their profile screen, where different data like count of products, routines and already done routines are displayed. Authenticated users can access the Today screen, where a calendar is displayed to support routine tracking. Through the calendar, users can view past dates and check whether their routines were completed or missed.
---
3. Authentication & Session Handling
- Authentication Flow
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

Product List Data:
The Product List screen displays all products created by the user in a clear and organized layout.
Features:
- View Product Details:  product name, brand, category, product image
- Edit Products - quickly update existing product information.
- Delete Products - remove products easily with a simple action.
- Add New Products - a floating action button allows fast creation of new products.

Navigation to the ProductDetailsScreen is triggered when a user selects (presses) a product item from the Product List screen. When a product card is pressed, the app navigates to the details screen and passes the selected product’s id as a route parameter.

```javascript 
 const productPressHandler = () => {
        navigation.navigate('Product Details', { productId: product.id });
    };
```
The screen receives the following parameter via route.params. This productId is then used to retrieve the full product object from the global products state.
The productId identifies which product to display.The products array (from useProducts()) contains all stored products.The correct product is selected using .find().The product data is then displayed on the screen.The deleteProduct function allows the user to remove the current product. The deletion must be confirm by clickig on 'Delete' on ALert pop-up.
The screen also provides a edit action. To edit the current routine the user has to click on the corresponding icon, which would navigate to the edit screen. 

```javascript 
  const { productId } = route.params; 
    const { products } = useProducts();

    const product = products.find(p => p.id === productId);
    const { deleteProduct } = useProducts();

const handleDelete = () => {
        confirmDelete({
            title: "Delete Product",
            message: "Are you sure you want to delete this product?",
            onConfirm: () => deleteProduct(product.id),
        });
    };

export const confirmDelete = ({ title, message, onConfirm }) => {
	Alert.alert(title, message, [
		{ text: "Cancel", style: "cancel" },
		{ text: "Delete", style: "destructive", onPress: onConfirm },
	]);
};



<TouchableOpacity 
 	 hitSlop={10}
   onPress={() => navigation.navigate('Product Edit', { product })}
>

```
Routine List Data:
The Routine List screen displays all routines created by the user in a minimalistic and organized layout.

Features:
- View Product Details:  routine category (morning, night, sprcial, face mase, under eye mask or special), name if included, and image.
- Edit Products - quickly update existing routine information.
- Delete Products - remove routines easily with a simple action.
- Add New Products - a floating action button allows fast creation of new routines.

Navigation to the Details Screen is handled in the same way as navigation from a Product item, by passing the required parameters through navigation.navigate().
Products that are assigned to the selected routine are displayed on the Routine Details Screen. The selected routine is identified using the routineId received via route parameters.All routines are retrieved using the useRoutine() hook, and the correct routine is selected using the find() method.
Each routine contains an array of productIds.
To display the corresponding products, the app maps over these IDs and matches them with the full product objects from the global products state.
The screen also provides a delete action and edit action. TO edit the current routine the user has to click on the corresponding icon, which would navigate to the edit screen. 

```javascript 
 navigation.navigate('Routine Details', { routineId: routine.id })}


 const { routineId } = route.params;
    const { routines } = useRoutine();

    const routine = routines.find(r => r.id === routineId);

    const navigation = useNavigation();
    const { products, loading } = useProducts();
    const { deleteRoutine } = useRoutine();


    const handleDelete = () => {
        confirmDelete({
            title: "Delete Routine",
            message: "Are you sure you want to delete this routine?",
            onConfirm: () => deleteRoutine(routine.id)
        })

    };

<TouchableOpacity
   hitSlop={10}
   onPress={() => navigation.navigate('Routine Edit', { routine })}
>

```


---
6. Data Source & Backend
- Backend Type - Real backend (Firebase)

---
7. Data Operations (CRUD)
  
Data Operations – Routines (GET)

Routine data is accessed through the custom hook:

```javascript
const { addRoutine } = useRoutine();
```
The useRoutine() hook (from context/routines/useRoutines) is responsible for retrieving the routines. This indicates that routine data is managed via Context API, making it globally accessible across the application. While the AddRoutineScreen primarily handles creating a new routine, it leverages the same form (RoutineForm) for both adding and editing routines.


Routines (Post)

- Users tap the “+” button in RoutinesScreen
- RoutineCategoryModal opens to select a category and image.
- Users fill out the RoutineForm, which is used for creating and editing routines.
  - fields: Category & Image, Started On date, Name (if category is “Special”), Notes, Reminder toggle, Linked products (ProductModal)
  - category can be change multiple times during creation process. The category image is thus changed correspondigly.
- On Save, handleSubmit validates and submits data:

```javascript
const handleSubmit = async () => {
    const { isValid, message } = validateRoutine({ category: selectedCategory, startedOn, name, notes });
    if (!isValid) return Alert.alert("Error", message);

    onSubmit({
        category: selectedCategory,
        imageKey: selectedImageKey,
        name: name || null,
        startedOn,
        reminder,
        notes,
        productIds: selectedProducts.map(p => p.id),
    });
};
```
onSubmit is provided by AddRoutineScreen: 

```javascript
 const handleAdd = async (formData) => {
    try {
        addRoutine(formData);
        navigation.goBack();
    } catch (error) {
        Alert.alert("Error", "Failed to add routine");
    }
}
``` 
RoutineForm: Unified Add & Edit 
The RoutineForm component is designed to handle both creation and editing:

```javascript
<RoutineForm
    initialValues={{category, imageKey}}
    onSubmit={handleAdd}
    submitLabel="Save"
/>
```

New routine appears immediately in RoutinesScreen because useRoutine context holds the latest routines.
State-driven re-render ensures the UI is always synced.



UPDATE (EDIT)
Users navigate to EditRoutineScreen with an existing routine:
```javascript
const { routine } = route.params;
```
RoutineForm is prefilled with the routine’s data. initialValues allows all fields (category, image, name, notes, reminder, linked products) to appear for editing.

```javascript
<RoutineForm
    initialValues={routine}
    onSubmit={handleUpdate}
    submitLabel="Update"
/>
```
On Save, handleUpdate is called: 

```javascript
const handleUpdate = async (formData) => {
    try { 
        await updateRoutine(routine.id, formData);
        Alert.alert("Success", "Routine updated successfully");
        navigation.navigate('Routine Details', { routineId: routine.id });
    } catch (error) {
        Alert.alert("Error", "Failed to update routine. Please try again.");
    }
};
```
updateRoutine(routine.id, formData) (from useRoutine context) updates the routine in the global state/backend.
Success navigates the user to Routine Details, showing the updated data.

DELETE: 

The Delete action is triggered via handleDelete:

```javascript
const handleDelete = () => {
    confirmDelete({
        title: "Delete Routine",
        message: "Are you sure you want to delete this routine?",
        onConfirm: () => deleteRoutine(routine.id)
    })
};
```
confirmDelete shows a confirmation modal before deletion.
deleteRoutine(routine.id) removes the routine from the backend and context state

The deletion is performed on Firestore via deleteRoutine:
```javascript
await firestore.collection('routines').doc(routineId).delete();

```
The routine disappears from the routines list immediately due to context state reactivity.


Data Operations – Products

The flow is similar to the routine one.
1. Users tap the “+” button in ProductsScreen:
2. They fill out the Add Product form (name, brand, category, image, etc.). Images can be taken or upload from the librabry using ImagePicker or CameraCapture. 
3. On Save, the form calls a createProduct function (from useProducts context) to send data to Firestore.
4. New products appear immediately in ProductsScreen thanks to context state updates.
5. Pull-to-refresh (reloadProducts) ensures the list stays current.
```javascript

export default function ImagePicker({
    onImagePicked
}) {
    const [ status, requestPermission ] = useMediaLibraryPermissions();

    if (!status) {
        return <ActivityIndicator size="large" />
    }
    if (!status.granted) {
        
        return (
            <View >
                <Text>Library access is required to upload photos.</Text>
                <Button title="Grant Permission" onPress={requestPermission} />
            </View>
        );
    }

    const pickImageHandler = async() => {
        const result = await launchImageLibraryAsync({
            quality: 0.5,
        });

       if (result.canceled) {
            return;
        }

        onImagePicked(result.assets[0].uri);
    }
 return (
        <TouchableOpacity 
            style={styles.uploadPhotoBtn} 
            onPress={pickImageHandler}
        >
            <Text style={styles.btnText}>Upload Photo</Text>
        </TouchableOpacity>
    );
};



export default function CameraCapture({
    onPhotoTaken
}) {
    const [status, requestPermission] = useCameraPermissions();

    if (!status) {
        return <ActivityIndicator size="large" />
    }
    if (!status.granted) {
        
        return (
            <View style={styles.permissionContainer}>
                <Text style={styles.permissionText}>Camera access is required to take photos.</Text>
                <Button title="Grant Permission" onPress={requestPermission} />
            </View>
        );
    }

    const takePhotoHandler = async() => {
        const result = await launchCameraAsync({
            quality: 0.5, 
        });


        if (!result.canceled) {
            if (onPhotoTaken) {
                onPhotoTaken(result.assets[0].uri);
            }
        }
    }   

 return (
        <TouchableOpacity 
            style={styles.takePhotoBtn} 
            onPress={takePhotoHandler}>
            <Text style={styles.btnText}>Take Photo</Text>
        </TouchableOpacity>
    );
};
```


```javascript
createProduct(productData); // saves product in Firestore
```

Data Operations – Products (GET)

Products data is accessed through the custom hook:

```javascript
const { addProduct } = useProducts();
```

The delete and edit methods work similarly to the Routines ones. 

---


8. Forms & Validation
- Forms are used for editig and creating Products and Routines
The project includes several validation utilities to ensure user inputs are correct before submission. Each function returns an object indicating whether the input is valid and provides error messages when necessary.

9. List all forms in the application:
- Validation Rules
- Describe at least three validated fields: - Field name and rules: - Field name and rules: - Field name with multiple validation rules:

validateLoginCredentials:
- Email: Required and must match a standard email format.
- Password: Required.

returns:
```javascript
{ 
  isValid: boolean, 
  errors: { email?: string, password?: string } 
}
```

validateRegisterCredentials:
- Name: Required, minimum 3 characters.
- Email: Required, must be valid.
- Password: Required, at least 6 characters, must contain a digit.
- Confirm Password: Must match the password.

returns:
```javascript
{ 
  isValid: boolean, 
  errors: { name?: string, email?: string, password?: string, confirmPassword?: string } 
}
```


validateRoutine:
- Category: Required.
- Started On: Required.
- Name: Required for "Special" routines, minimum 5 characters.
- Notes: Optional, but must be at least 10 characters if provided.

returns
```javascript
{ 
  isValid: boolean, 
  message?: string 
}
```

validateProduct:
- Name: Required, minimum 5 characters.
- Brand: Required.
- Category: Required.
- Expires in Months: Must be non-negative if provided.
- Notes: Optional, but must be at least 10 characters if filled.
returns
```javascript
{ 
  isValid: boolean, 
  message?: string 
}
```

---

10.  Native Device Features
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
11.  Typical User Flow
- Describe a normal user journey through the app:
  1. User creates Account or uses the demo credentials.
  2. Today Screen - shows the daily routines and if they are checked/one
  3. User can add new products going to the Product List screen navigating through the bottom tab navigation.
  4. User creates new product on the Add Product Screen.
  5. User creates new routing by going to the routines screens and pressing on the plus. A modal appears and the user chooses the category of the routine. Fills up the routine data and can choose if a reminder should be initiated. Some existing products can also be added when creating a routine.
  6. Navigating to the Profile screen throught the navigation bottom tab the user can see some personal data: counts of routines and products and also how many routine are already done.
  7. On the Today screen the user can also browse pasted days and see if the routine are done or not. 
---
1.  Error & Edge Case Handling
- Describe how the app handles: - Authentication errors - Network or data errors - Empty or missing data states

Login & Register Screens use validation functions (validateLoginCredentials, validateRegisterCredentials) to check inputs before submission.If validation fails, the user sees inline alerts or messages. Backend authentication errors from Firebase (e.g., incorrect password, user not found) are caught and displayed. 


```javascript
Alert.alert("Error", errors.email || errors.password);

try {
    await signInWithEmailAndPassword(auth, email, password);
} catch (error) {
    Alert.alert("Login Failed", error.message);
}
```
All CRUD operations (create, update, delete routines/products) are wrapped in try/catch blocks.

On failure, the user receives alerts notifying them of the issue:
```javascript
try {
    await addRoutine(formData);
} catch (error) {
    Alert.alert("Error", "Failed to add routine");
}
```

Pull-to-refresh (reloadRoutines, reloadProducts) ensures users can retry loading data when network issues occur.
Loading states (loading boolean from context) are used to show spinners or disable actions during data fetch.

Routines & Products screens display friendly placeholders if no data exists: 

```javascript
<TouchableOpacity onPress={() => setShowCategoryModal(true)}>
    <Text>No routines yet. Tap to create!</Text>
</TouchableOpacity>
```
RoutineForm and ProductForm handle optional fields gracefully (notes, images, reminder toggles).
Forms cannot be submitted if required fields are missing, thanks to validation functions, preventing incomplete entries.



---


