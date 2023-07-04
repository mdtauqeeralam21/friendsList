export const getStaticPaths=async ()=>{
    const res  =await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();
      
  const paths=data.map(friend=>{
      return{
          params:{id:friend.id.toString()}
      }
  })
     return{
      paths,
      fallback:false
     }
  }
  
  export const getStaticProps=async (context)=>{
      const id=context.params.id;
      const res  =await fetch('https://jsonplaceholder.typicode.com/users/'+id);
      const data=await res.json();
      return {props : {friend:data}}
  
  }
  
  export default function FriendsDetail({friend}){
      return(
          <>
          <h2>Friends Details Here....</h2>
          <h3>{friend.name}</h3>
          <h3>{friend.email}</h3>
          <h3>{friend.address.city}</h3>
          </>
      )
  }