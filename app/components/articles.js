import React, { Component } from 'react';
import { Link } from 'react-router';

class Articles extends Component {

  render() {
    let links = this.props.articles.map(article => <Link key={article.ref} to={'/articles/'+ article.ref}>{article.title}<br/></Link>)
    return (
      <div>
        Articles:<br/>
        {links}
      </div>
    )
  }
}
const articles = [
  { ref: 1, title: 'Bonbon danish', body: `\tSweet roll muffin dragée bear claw powder. Cake pastry wafer sugar plum candy jujubes marshmallow. Toffee dessert ice cream biscuit cake soufflé candy jelly beans.
  Liquorice sweet roll powder gingerbread caramels bonbon oat cake chocolate dessert. Jelly-o sugar plum powder fruitcake. Liquorice cake cake danish sesame snaps cheesecake.
  Sweet croissant candy canes donut chocolate bar. Chocolate bar toffee croissant pastry candy canes tiramisu marzipan. Gummies cookie sweet roll. Pie carrot cake bonbon liquorice.`
},
{ ref: 2, title: 'Sesame snaps jelly beans', body: `\tGummi bears caramels cake topping. Halvah jelly muffin sweet roll jelly-o. Bonbon danish fruitcake cookie tiramisu brownie.
Cupcake tiramisu icing chocolate cake. Apple pie cake chocolate bar apple pie powder ice cream lemon drops. Gummi bears bonbon ice cream donut gummi bears tootsie roll bonbon liquorice.
Marzipan jelly-o lollipop cotton candy sugar plum jujubes. Pudding bonbon apple pie lemon drops pudding cake. Topping tiramisu biscuit.?`
},
{ ref: 3, title: 'Cheesecake dessert cookie',
body: `\tSesame snaps jelly beans bear claw muffin dessert lollipop caramels. Dessert marshmallow pastry gummies pie halvah. Carrot cake marzipan pastry pastry. Tiramisu donut bear claw.
Cheesecake dessert cookie jujubes tootsie roll. Bonbon muffin candy topping pudding chupa chups chocolate. Jujubes jelly-o chupa chups pudding apple pie liquorice oat cake. Lemon drops oat cake icing sweet roll biscuit cupcake.`
}
]

export default Articles;
