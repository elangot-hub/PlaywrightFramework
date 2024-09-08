class loginpage {

    constructor(page) {

        this.page = page;
    }

       // this.usernamefield = page.locator("#user-name")

       // this.passwordfield = page.locator("#password")

       // this.loginbutton=page.locator("#login-button")



   get usernameinput(){
    return this.page.locator("#user-name")
   }     


     get passwordinput(){
    return this.page.locator("#password")
}     

      get loginbutton(){
          return this.page.locator(".btn_action")
    }     

  


   
  //  async enterusername(username) {
      //  await this.usernamefield.fill(username);
   // }

   // async enterpassword(password) {
       // await this.passwordfield.fill(password);
   // }

  //  async login() {

       // await this.loginbutton.click();
   // }

    async loginapplication(username, password) {


        await this.usernameinput.fill(username);

        await this.passwordinput.fill(password);

        await this.loginbutton.click();

       
}
     











}
module.exports = loginpage;
