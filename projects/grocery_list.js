/*
User stories:
Create a new list
Add an item with a quantity to the list
Remove an item from the list
Update quantities for items in your list
Print the list (Consider how to make it look nice!)


Pseudocode:
Page defaults to an empty list and a button to add items
When user clicks the 'add items' button:
  - A form appears for the user to fill in:
    -- the name of the item
    -- a quantity
    -- a unit of quantity (optional)
    -- a category (optional) - ideally, we'd sort the list by this field
  - The info entered into this form gets added to the table of items

When user clicks the 'remove item' button:
  - The item in the same row of the table is removed from the list

When user clicks the 'update quantity' button:
  - A form appears that allows the user to update the quantity and
    units for the item
  - The list of items gets updated with the new data
*/
$(document).ready(function() {
  
  var $change_quantity = ("<button class='update_quantity'>CHANGE QUANTITY</button>");
  var $remove_item = ("<button class='rmv_item'>REMOVE ITEM</button>")

  // $addEvent($form, "submit", function(e) {
  //   e.preventDefault();
  //   var $elements = this.elements;
  //   $(".list").append("<tr><td>goldfish</td><td>12</td><td>fish</td><td>meat</td><td>" + $change_quantity + $remove_item + "</td></tr>")
    // $(".list").append("<tr><td>" + $elements.item_name.value +
    //   "</td><td>" + $elements.quantity.value + "</td><td>" + 
    //   $elements.units.value + "</td><td>" + $elements.category.value
    //   + "</td><td>" + $change_quantity + $remove_item + "</td></tr>");

    // var $item_name = elements.item_name.value;
    // var $quantity = elements.quantity.value;
    // var $units = elements.units.value;
    // var $category = elements.
  // })


  $(".add").click(function(e) {
      e.preventDefault();
      // var form = document.getElementByID("add_item");
      // var item_name = document.forms[0];
      var item_name = $("item_name").text();
      // var quantity = ("quantity").val();
      // var units = ("units").val();
      // var category = ("category").val();
      $(".list").append("<tr><td>goldfish</td><td>12</td><td>fish</td><td>meat</td><td>" + $change_quantity + $remove_item + "</td></tr>")
      $(".list").append("<tr><td>" + item_name + "</td><td></td><td></td><td></td><td>" + $change_quantity + $remove_item + "</td></tr>")
  })

// var grocery_list = {

//   add_item: function add_item(name, quantity, units, category) {
//   	if (name) // if the name has more than one word, insert _ between the words
//   	if(grocery_list.hasOwnProperty(name)) {
//   		grocery_list[name]["quantity"] = quantity;
//   	}
//   	else {
//   	grocery_list[name] = {};
//   	grocery_list[name]["quantity"] = quantity;
//   	grocery_list[name]["units"] = units;
//   	grocery_list[name]["category"] = category;
//     }
//   },

//   remove_item: function remove_item(name) {
//   	delete grocery_list[name];
//   }
// };  

});
