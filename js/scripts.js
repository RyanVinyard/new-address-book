
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

function Address(street, city, state, addtype) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.addtype = addtype;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Address.prototype.fullAddress = function() {
  return this.street + this.city + ", " + this.state + ": " + this.addtype;
}

function resetFields() {
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input.new-street").val("");
  $("input.new-city").val("");
  $("input.new-state").val("");
}

// user interface logic
$(document).ready(function() {

  $("#add-address").click(function() {
  $("#new-addresses").append('<div class="appendText">' + '<div class="new-address">' +
             '<div class="form-group">' +
               '<label for="new-street">Street</label>' +
               '<input type="text" class="form-control new-street">' +
             '</div>' +
             '<div class="form-group">' +
               '<label for="new-city">City</label>' +
               '<input type="text" class="form-control new-city">' +
             '</div>' +
             '<div class="form-group">' +
               '<label for="new-state">State</label>' +
               '<input type="text" class="form-control new-state">' + '<div class="form-group">' + '<label for="address-type">Address Type</label>' + '<select type="text" class="form-control" id="address-type">' + '<option>House</option>' + '<option>Apartment</option>' + '<option>Business</option>' + '</select>' + '</div>' +
             '</div>' +
           '</div>' + '</div>');
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();



// );

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var inputtedType =
      // $(this).find("input.address-type").val();
      $(this).find("#address-type").val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState, inputtedType);
      newContact.addresses.push(newAddress);
    });

//this is where the new contacts show up in bullet form
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    // $("ul#addresses").text(newAddress.city);
    newContact.addresses.forEach(function(address) {
      $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
    });
  });
//what does this do??
  resetFields();
  $(".appendText").hide();

  });
});
