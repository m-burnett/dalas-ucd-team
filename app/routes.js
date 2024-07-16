//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()




//previous role - Lyndsey

router.post('/lyndsey/previousrole-answer', function(request, response) {
    
    var previousrole = request.session.data['previousrole']
    if (previousrole == "Yes"){
        response.redirect("/lyndsey/previousrole-question")
    } else {
        response.redirect("/lyndsey/checkanswers")
    }
})