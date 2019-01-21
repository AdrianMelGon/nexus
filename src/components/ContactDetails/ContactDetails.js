// import React, { Component } from 'react';
// import { rgba } from 'polished';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import Icon from '../Icon';
// import Link from '../Link';
// import Contacts from '../../services/contacts';

// const Container = styled('section')``;
// const Header = styled('header')``;
// const Profile = styled('div')``;
// const Backpic = styled('div')``;
// const Information = styled('div')``;
// // const BackImg = styled('BackImg')``;

// class ContactDetails extends Component {
//   static defaultProps = {
//     className: '',
//   };

//   static propTypes = {
//     className: PropTypes.string,
//   };

//   state = {};

//   async componentWillMount() {
//     const contacts = await Contacts.read();
//     contacts.forEach(e => {
//       if (e.id == this.props.match.params.id) {
//         this.setState(e);
//       }
//     });
//   }

//   render() {
//     const { className } = this.props;
//     const data = this.state;
//     return (
//       <article className={className}>
//         <Header>
//           <Link to="/">
//             <Icon>arrow_back_ios</Icon>
//           </Link>
//           {className.params}
//         </Header>
//         <Container>
//           <Profile>
//             <Backpic>
//               <h3>{data.phone}</h3>
//               <h3>{data.id}</h3>
//             </Backpic>
//             <Information>
//               <Icon>phone</Icon>
//               <h3>
//                 Mobile:
//                 {data.cell}
//               </h3>
//             </Information>
//             <Information>
//               <h3>
//                 Work:
//                 {data.phone}
//               </h3>
//             </Information>

//             <Information>
//               <Icon>mail_outline</Icon>
//               <h3>
//                 Email:
//                 {data.email}
//               </h3>
//             </Information>

//             <Information>
//               <Icon>location_on</Icon>
//               <h3>
//                 Adress:
//                 {data.phone}
//               </h3>
//             </Information>
//             <Information>
//               <h3>
//                 Work:
//                 {data.phone}
//               </h3>
//             </Information>
//           </Profile>
//         </Container>
//       </article>
//     );
//   }
// }

// export default styled(ContactDetails)`
// background: ${props => props.theme['--color-light']};
// height: calc(100% - 2.5rem);
// position: fixed;
// top: 2.5rem;
// width: 100%;
// //
// ${Header} {
//   ${props => props.theme['--font-extra-large']};
//   background-color: #607d8c;
//   align-items: center;
//   display: flex;
//   height: 10rem;
//   justify-content: center;
//   text-align: center;

//   ${Icon} {
//     height: 5rem;
//     left: 0;
//     line-height: 5rem;
//     position: absolute;
//     top: 0;
//     width: 5rem;
//     }
//   }

//   ${Container} {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//  ${Profile} {
//   width: 60%;
//   marging: 20%;

//  }

//  ${Backpic} {
//   background-image: url(https://randomuser.me/api/portraits/men/0.jpg);
//   background-repeat: no-repeat
//   background-size: cover;
//   background-position: center;
//   height: 20rem;
//  }

//   @media (${props => props.theme['--screen-medium']}) {
//     border-left: 1px solid ${props => rgba(props.theme['--color-dark'], 0.1)};
//     left: 32rem;
//     width: calc(100% - 32rem);
//   }
// `;
