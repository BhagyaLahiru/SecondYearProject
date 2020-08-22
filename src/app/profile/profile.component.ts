import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  data = [
    {
      imge: 'assets/images/001.jpg',
      title: 'Unheated natural blue sapphire',
      description: 'Unheated nutural blue sapphire from Sri Lanka',
      price: '$900.00'
    },
    {
      imge: 'assets/images/002.jpg',
      title: 'Nature Ceyloa blue sapphire',
      description: '3.47-carat, trilliant cut, natural Ceylon blue sapphire',
      price: '$7,200.00'
    },
    {
      imge: 'assets/images/003.jpg',
      title: 'Natural Ceylon cornflower blue sapphire',
      description: 'Unheated natural Ceylon cornflower blue sapphire. This stone has not been treated in any way',
      price: '$1,200.00'
    },
    {
      imge: 'assets/images/004.jpg',
      title: 'Natural cornflower blue sapphire',
      description: '2.73-carat, pear-shaped, natural cornflower blue sapphire',
      price: '$3,200.00'
    },
    {
      imge: 'assets/images/005.jpg',
      title: '2.81ct,heart shape,natural blue sapphire',
      description: 'The shape is perfect for Engagement Rings as it is a literal symbol of love.',
      price: '$3,200.00'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
