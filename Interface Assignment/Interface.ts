//                                    TASK # 1



interface product {
    name: string,
   price: number,
category: string,
    id:   number
}




type cart = [product];


interface customer {
    name:string,
    id  :number,
   email:string
}



type order = {
    customer : customer,
    cart : cart
}



function calculateTotal(cart: cart): number {
    let total = 0;
    for (const product of cart) {
        total + product.price;
    }
    return total;
}


// ---------------------------------------------------------------------------------------------------------------


//                                      TASK # 2




interface Author {
    name:string,
    id  :number,
    bio :string
}


type comment = {
     author : Author,
     content: string,
   timestamp: number
}


interface post {
    likes: any;
    content: string,
       id  : number,
    title  : string,
    author : Author,
  comments : comment[]

}



function sortPostsByComments(posts: post[]): post[] {
    return posts.slice().sort((a, b) => b.comments.length - a.comments.length);
  }





//                                     TASK # 3


interface profile {
 username:string,
       id:number,
      bio:string,
    posts:post[]
}


type like = {
      user:string,
 timestamp:number
}

interface comments {
      user:string,
      id  :number,
   content:string,
 timestamp:string

}


function findMostLikedPost(profiles: profile[]): { post: post | null; user: profile | null } {
    let mostLikedPost: post | null = null;
    let mostLikes = 0;
    let postAuthor: profile | null = null;
  
    for (const profile of profiles) {
      for (const post of profile.posts) {
        if (post.likes.length > mostLikes) {
          mostLikes = post.likes.length;
          mostLikedPost = post;
          postAuthor = profile;
        }
      }
    }
  
    return { post: mostLikedPost, user: postAuthor };
  }