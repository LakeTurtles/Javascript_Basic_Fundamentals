const posts = [
    { title: 'Post One', body: 'This is post one MF'},
    { title: 'Post Two', body: 'This is the MF Second Post'}
];

function getPosts (){
        setTimeout(() => {
            let output = '';
            posts.forEach((post, index) => {
                output += `<li>${post.title}</li><li>${post.body}</li>`;
            });
            document.body.innerHTML = output;
    }, 1000);
}
function createPost(post){
    return new Promise((resolve, reject) => {
         setTimeout(() => {
         posts.push(post);

        const error = false;
            if (!error) {
            resolve();
            } else {
            reject('Error: sumtin wong');
            }
        }, 3000);
    });
}

createPost( {title: 'Post Three', body: 'This is post three'}
                                                    ).then(getPosts);
    
