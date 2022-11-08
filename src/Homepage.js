const Homepage = () => {

    function validate() {
        var json = require('./db.json');
        let flag = 0;
        var tc = document.getElementById("tc").value;
        var sifre = document.getElementById("sifre").value;

        json.forEach((item) => {
            if ( tc === item.tc && sifre === item.sifre) {
                window.location.pathname = "/active"; // Redirecting to other page.
                flag = 1; 
            }
        });
        
        if (flag != 1) {
            document.getElementById("error").innerHTML="Giris bilgileri gecersiz";
        }
    }

    return ( 
        <>
        <br></br><br></br><br></br>
        <form id="login" style={{textAlign: "center"}}>
            <div className="form-group">
                <label className='form-label'>TC</label><br></br>
                <input type="text" id="tc" placeholder="TC" />
            </div>
            <div className="form-group">
                <label className='form-label'>Sifre</label><br></br>
                <input type="password" id="sifre" placeholder="Sifre" />
            </div>
            <div className="form-group">
                <h3 className='form-text' id="error"></h3><br></br>
                <input type="button" className='btn btn-primary' value="Giris Yap" id="submit" onClick={validate}/>
            </div>
        </form>
        </>
    );
}
 
export default Homepage;