<template>
    <div class="overall--container">
    <div class="container"> 
        <div class="top--container">
            <img src="../images/microsoft-logo.png" alt="microsoft-logo" class="logo"/>
            <p class="text">Microsoft</p>
        </div>

        <p class="sign--in">Sign in</p>
        
        <div>
            <input v-bind:style="{backgroundColor: inputBackground, borderBottom: underlineColor}" type="text" @keydown= "inputBackground = '#e3f8ff', underlineColor = '#004c9a'" @blur="inputBackground = 'white', underlineColor = '#004c9a'" placeholder="Email, phone, or Skype" class="input" />
        </div>
        <div>
            <p class="account">No account? <span class="span--text">Create one!</span></p>
        </div>
        
        <div>
            <p class='access'>Can't access your account?</p>
        </div>

        <div class="last--container">
            <button @click.prevent="onClickBack" class="button">Back</button>
            <button @click.prevent="onClick" class="button" id="next">Next</button>
        </div>
    </div>
    <div class="second--container">
        <img src="../images/key--logo2.jpg" alt="key-logo" class="key--logo"/>
        <p class="last--text">Sign-in options</p>
    </div>
</div>

  <router-view name="child"></router-view>

</template>

<script>
export default{
    data(){
        return{
        inputBackground: 'white',
        underlineColor: 'black'
        }
    },

    methods: {
        onClick(){
            this.$router.push({ name: "password" });
        },

        onClickBack(){
            this.$router.push("/")
        }
       }
}
</script>

<style scoped>
.overall--container{
    display: grid;
    place-items: center;
    margin-top: 120px;
}

.key--logo{
    width: 40px;
    height: 40px;
}


.container{
    background-color: #fff;
    display: grid;
    gap: 10px;
    padding: 50px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
    width: 350px;
    height: 250px;
}


.span--text{
    color: #004c9a;
    font-size: 15px;
    cursor: pointer;
}

.span--text:hover{
    color: #737373;
    text-decoration: underline;
}

.access{
    color: #004c9a;
    font-size: 15px;
    cursor: pointer;
}

.access:hover{
    color: #737373;
    text-decoration: underline;
}

.top--container{
    display: flex;
    gap: 5px;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: center;
}

.second--container{
    display: flex;
    margin-top: 20px;
    background-color: #fff;
    color: rgb(24, 24, 24);
    gap: 5px;
    font-size: 18px;
    cursor: pointer;
    padding: 7px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
    width: 435px;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: center;
    transition: 0.3s ;
    margin-bottom: 70px;
}

.second--container:hover{
    opacity: 0.5;
    color: black;
}

.last--text{
    margin-top: 9px;
}

.sign--in{
    font-size: 25px;
    color: black;
}

.account{
    color: #5c5b5b;
    font-size: 15px;
}

.input{
    border: none;
    outline: none;
    width: 350px;
    padding: 7px;
    border-bottom: 1px solid #004c9a;
    background-color: aquamarine;
}


::placeholder{
    font-size: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
.logo{
    width: 25px;
    height: 25px;
}

.text{
    font-size: 19px;
    font-weight: normal;
    color: #737373;
    font-family: 'Open Sans', sans-serif;
    margin-top: 4px;
}

.last--container{
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 10px;
}

.button{
    border: none;
   background-color: rgb(202, 199, 199) ;
   padding: 7px 35px;
   text-align: center;
   font-size: 14px; 
   transition: 0.3s
}

.button:hover{
    /* border: 0.5px solid black;
    text-decoration: underline; */
    opacity: 0.8;
    background-color: #807e7e;
}

#next{
    background-color: #004c9a;
    color: white;
}
</style>