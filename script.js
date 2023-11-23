function ajouter()
{
    let produit = document.getElementById("produit").value;
    let qte = document.getElementById("qte").value;
    let prix = document.getElementById("prix").value;
    let pInfo = 
    {
        "qte": qte, 
        "prix" : prix
    };    
    console.log(pInfo);
    localStorage.setItem(produit, JSON.stringify(pInfo));
    document.getElementById("produit").value="";
    document.getElementById("qte").value=""; 
    document.getElementById("prix").value="";  
}