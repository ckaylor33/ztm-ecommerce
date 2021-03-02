# ztm-ecommerce

Ecommerce Platform<br>

Tech Stack<br>
-React<br>
-SASS<br>
-FireBase: backend & authentication<br>

Problems<br>
State<br>
-Where to put state for the register/sign in page. Should it be in the page itself or the individual register/sign in components?<br>
-Sign in will have own state and register will have own state as the two components don't need to communicate with each other. Sign in doesn't care what we enter into register and register doesn't care what we enter into register<br>
-If kept in the same page both register/sign in would re-render; this is uneccessary

Data & Authenticatin<br>
