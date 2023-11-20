function networkProvider() {
    let numberInput = document.getElementById('phoneNumber');
    let image = document.getElementById('images');
    let phoneNumber = numberInput.value;
    if (phoneNumber !== "") {
        let mtnNumber = (phoneNumber.startsWith("0803") || phoneNumber.startsWith("0806")
        || phoneNumber.startsWith("0813") || phoneNumber.startsWith("0810")
        || phoneNumber.startsWith("0816") || phoneNumber.startsWith("0814")
        || phoneNumber.startsWith("0903") || phoneNumber.startsWith("0906")
        || phoneNumber.startsWith("0703") || phoneNumber.startsWith("0704")
        || phoneNumber.startsWith("0706") || phoneNumber.startsWith("07025")
        || phoneNumber.startsWith("07026"));

        let airtelNumber = (phoneNumber.startsWith("0802")
        || phoneNumber.startsWith("0808") 
        || phoneNumber.startsWith("0808"))
        
    }
}