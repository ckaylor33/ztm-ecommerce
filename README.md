# ztm-ecommerce

Ecommerce Platform<br>

Tech Stack<br>
-React & Redux<br>
-SASS & Styled components<br>
-FireBase: backend & authentication<br>

Problems<br>
State<br>
-Where to put state for the register/sign in page. Should it be in the page itself or the individual register/sign in components?<br>
-Sign in will have own state and register will have own state as the two components don't need to communicate with each other. Sign in doesn't care what we enter into register and register doesn't care what we enter into register<br>
-If kept in the same page both register/sign in would re-render; this is uneccessary
Redux<br>
-Make state scalable, as project getting bigger<br>
-Notes to remember with redux -> action (user action) -> goes through reducer function (receives input; the action, then creates output; the state/store ) -> the store (entire app state, store gets updated) -> react makes those changes to view layer
-Known as FLUX pattern (Action -> dispatcher -> Store -> View), better than MVC (Action -> Controller -> Model -> View)
-If currentUser state stayed within app, would have to drill/tunnel props down for the cart component -> cart nested in navbar -> Navbar doesn't need currentUser state<br>
-Reducer will store currentUser value that we pass in using mapStateToProps into the header -> header no longer dependent on App.js passing in state, but App still updates user-reducer.js value so header gets latest current user property<br>
-Cart state gets re-rendered everytime any state changes - need to cache these values if if cart state doesn't change so cart doesn't re-render everytime; will use reselect

Data & Authenticatin<br>
-Use observer pattern for async requests to firebase, might modify to use REST (promise pattern) if possible - this is now handled by redux inside of a reusable action (redux-thunk)
-Working out how to use firebase for authentication, checking if the user exists and then storing the user state inside the app so they'll be able to store things in cart and checkout using their details
-Doing this for both sign in, up and sign in with google authentication
-How to update data dynamically from db to the app, app should listen for firestore changes whenever data updates; app should always have the newest data
-Still need to store the data from firestore inside the redux shop reducer
-Code that fetches the data should live in the shop component (dry principle), can then give collection overview and collection page access to that data
-Now data is on firebase db, need some sort of loader to indicate when page is loading (fetching data on reload); have now implemented higher order function for loading spinner that can be re-used whenever data is being fetched from backend (no repeated code). Currently used within collection page and collection overview

Session storage & persistence<br>
-Will use redux persist for local storage for now; this is so the user cart doesn't re-render and clear completely on refresh
-Could implement firebase storage at some point

Styling
-Integrate styled components within the project
