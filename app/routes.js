//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
//do you go by another name
router.post('/megan/anotherjobquestionAnswer', function(request, response) {

    var anotherjob = request.session.data["anotherjob"];
    
    if (anotherjob == "yes" )
    {
        response.redirect("/anotherjob")
    }
    else
    {
        response.redirect("/checkanswers")
    }
}) 
