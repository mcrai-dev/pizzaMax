function check_form_new() {
    if (document.caddie.telephone.value == "") {
        alert("Veuillez saisir votre num tél.");
        document.caddie.telephone.focus();
        return false;
    }
    if (document.caddie.telephone.value.length < 10) {
        alert("Veuillez saisir un numéro de téléphone correct.");
        document.caddie.telephone.focus();
        return false;
    }
    if (document.caddie.email.value == "") {
        alert("Veuillez saisir votre email.");
        document.caddie.email.focus();
        return false;
    }
    if (!document.caddie.email.value.match("^.+@.+\\..+$")) {
        alert("Veuillez saisir votre email valide.");
        document.caddie.email.focus();
        return false;
    }
    if (document.caddie.nom.value == "") {
        alert("Veuillez saisir votre nom.");
        document.caddie.nom.focus();
        return false;
    }
    if (document.caddie.prenom.value == "") {
        alert("Veuillez saisir votre prenom.");
        document.caddie.prenom.focus();
        return false;
    } else {
        document.caddie.submit();
        return true;
    }
}

function hideArea2() {
    var thearea = document.getElementById('hide');
    var thelist = document.getElementsByName('meth');
    for (var i = 0; i < thelist.length; i++) {
        if (thelist[i].checked) {
            if (thelist[i].value == "1") {
                thearea.style.display = "";
                
            } else {
                thearea.style.display = "none";
            
            }
            break;
        }
    }
}

function check_form_paiement() {
    var thelistmeth = document.getElementsByName('meth');
    for (var i = 0; i < thelistmeth.length; i++) {
        if (thelistmeth[i].checked) {
            if (thelistmeth[i].value == "1") {
                var payement = document.forms.caddie.elements["payement[]"];
                var paye = 0;
                for (j = 0; j < payement.length; j++) {
                    if (payement[j].checked == true) {
                        paye = 1;
                    }
                }
                if (paye == 0) {
                    alert("Veuillez préciser le mode de paiement.");
                    return false;
                }
            }
        }
    }
    document.caddie.submit();
    return true;
}

function control_contact() {
    if (document.form1.nom.value == "") {
        alert("Veuillez saisir votre nom.");
        document.form1.nom.focus();
        return false;
    }
    if (document.form1.prenom.value == "") {
        alert("Veuillez saisir votre prénom.");
        document.form1.prenom.focus();
        return false;
    }
    if (document.form1.telephone.value == "") {
        alert("Veuillez saisir votre num tél.");
        document.form1.telephone.focus();
        return false;
    }
    if (document.form1.email.value == "") {
        alert("Veuillez saisir votre email.");
        document.form1.email.focus();
        return false;
    }
    if (!document.form1.email.value.match("^.+@.+\\..+$")) {
        alert("Veuillez saisir votre email valide.");
        document.form1.email.focus();
        return false;
    }
    if (document.form1.objet.value == "") {
        alert("Veuillez saisir votre objet.");
        document.form1.objet.focus();
        return false;
    }
    if (document.form1.commentaires.value == "") {
        alert("Veuillez saisir votre commentaires.");
        document.form1.commentaires.focus();
        return false;
    }
    document.form1.submit();
    return true;
}

function control_recrutement() {
    if ((!document.forms.form1.civilite[0].checked) && (!document.forms.form1.civilite[1].checked) && (!document.forms.form1.civilite[2].checked)) {
        alert("Veuillez saisir votre civilité.");
        return false;
    }
    if (document.forms.form1.nom.value == "") {
        alert("Veuillez saisir votre nom.");
        document.forms.form1.nom.focus();
        return false;
    }
    if (document.forms.form1.prenom.value == "") {
        alert("Veuillez saisir votre prenom.");
        document.forms.form1.prenom.focus();
        return false;
    }
    if (document.forms.form1.email.value == "") {
        alert("Veuillez saisir votre email.");
        document.forms.form1.email.focus();
        return false;
    }
    if (!document.forms.form1.email.value.match("^.+@.+\\..+$")) {
        alert("Veuillez saisir votre email valide.");
        document.forms.form1.email.focus();
        return false;
    }
    if (document.forms.form1.adresse.value == "") {
        alert("Veuillez saisir votre adresse.");
        document.forms.form1.adresse.focus();
        return false;
    }
    if (document.forms.form1.cp.value == "") {
        alert("Veuillez saisir votre cp.");
        document.forms.form1.cp.focus();
        return false;
    }
    if (document.forms.form1.ville.value == "") {
        alert("Veuillez saisir votre ville.");
        document.forms.form1.ville.focus();
        return false;
    }
    if (document.forms.form1.tel1.value == "") {
        alert("Veuillez saisir votre numéro du téléphone.");
        document.forms.form1.tel1.focus();
        return false;
    }
    if (document.forms.form1.dn.value == "") {
        alert("Veuillez saisir votre date de naissance.");
        document.forms.form1.dn.focus();
        return false;
    }
    if ((!document.forms.form1.temps[0].checked) && (!document.forms.form1.temps[1].checked)) {
        alert("Veuillez saisir votre temps.");
        return false;
    }
    if (document.forms.form1.joint.value == "") {
        alert("Veuillez choisir votre cv.");
        document.forms.form1.joint.focus();
        return false;
    }
    if (document.forms.form1.joint1.value == "") {
        alert("Veuillez choisir votre lettre de motivation.");
        document.forms.form1.joint1.focus();
        return false;
    } else {
        document.form1.submit();
        return (true)
    }
}




function check_form_new_auth() {
    
     if (document.connexion.email_clt.value == "") {
        alert("Veuillez saisir votre email.");
        document.connexion.email_clt.focus();
        return false;
    }
    if (!document.connexion.email_clt.value.match("^.+@.+\\..+$")) {
        alert("Veuillez saisir votre email valide.");
        document.connexion.email_clt.focus();
        return false;
    }

    if (document.connexion.tel_clt.value == "") {
        alert("Veuillez saisir votre num tél.");
        document.connexion.tel_clt.focus();
        return false;
    }
    if (document.connexion.tel_clt.value.length < 10) {
        alert("Veuillez saisir un numéro de téléphone correct.");
        document.connexion.tel_clt.focus();
        return false;
    }
   
     else {
        document.connexion.submit();
        return true;
    }
}


function modifier_acces()
{

  if (document.acces_client.mail_client.value == "") {
        alert("Veuillez saisir votre email.");
        document.acces_client.mail_client.focus();
        return false;
    }
    if (!document.acces_client.mail_client.value.match("^.+@.+\\..+$")) {
        alert("Veuillez saisir votre email valide.");
        document.acces_client.mail_client.focus();
        return false;
    }

    if (document.acces_client.telephone.value == "") {
        alert("Veuillez saisir votre num tél.");
        document.acces_client.telephone.focus();
        return false;
    }
    if (document.acces_client.telephone.value.length < 10) {
        alert("Veuillez saisir un numéro de téléphone correct.");
        document.acces_client.telephone.focus();
        return false;
    }
   
     else {
        document.acces_client.submit();
        return true;
    }

}




function modifier_information()
{

     if (document.information_client.nom.value == "") {
        alert("Veuillez saisir votre nom.");
        document.information_client.nom.focus();
        return false;
    }
    if (document.information_client.prenom.value == "") {
        alert("Veuillez saisir votre prenom.");
        document.information_client.prenom.focus();
        return false;
    } else {
        document.information_client.submit();
        return true;
    }
    

}