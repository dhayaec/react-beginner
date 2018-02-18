import React from 'react';

// const Footer = () => (
//   <div>
//     <ul>
//       <li>one</li>
//       <li>two</li>
//       <li>three</li>
//       <li>four</li>
//       <li>five</li>
//     </ul>
//   </div>
// );

export const ListItem = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cumque mollitia suscipit
    soluta quas sint est perspiciatis vero? Accusantium, dignissimos! Iure id incidunt explicabo
    quas dicta aperiam amet ipsam voluptate!
  </p>
);

function Footer() {
  return (
    <div>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>four</li>
        <li>five</li>
      </ul>
      <ListItem />
    </div>
  );
}

export default Footer;
