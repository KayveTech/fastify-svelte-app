
<!-- JavaScript -->

<script>
    export let newPostData ={
        title: "",
    }

    const createPost = async ()=>{
      const new_post = {
            title: newPostData.title
        }
       await fetch('http://localhost:3000/api/blogs', {
           method: "POST",
           mode: "cors",
           headers:{
               "Content-Type": "application/json"
           },
           body: JSON.stringify(new_post)
       })
       .then(result=>console.log(result))
       .catch(err=>console.error(err))
    }

    const fetchPosts = (async () => {
	const response = await fetch('http://localhost:3000/api/blogs')
    return await response.json()
	})()

    const deletePost = async (id)=>{
       const response =  await fetch(`http://localhost:3000/api/blogs/${id}`, {
            method: 'DELETE'
        })

        const msg = await response.json()
        console.log(msg)
        // .then(res => console.log(res)).catch(err=>console.log(err))
    }

</script>

<!-- HTML Template -->

<section>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-6">
                <div class="card p-2 shadow">
                    <div class="card-body">
                        <div class="card-title mb-4">
                            <h2>Add New Post</h2>
                            <form>

                                <div class="form-group">
                                    <label for="title">Title:</label>
                                    <input bind:value={newPostData.title}
                                    type="text" class="form-control" id="text" placeholder="Note Post">

                                </div>


                                <button on:click|preventDefault={createPost}
                                type="submit" class="btn btn-primary">Add</button>

                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-md-">
                    <div class="card">
                        <h2 class="card-header">Posts</h2>
                        <div class="card-body">


{#await fetchPosts}
	<p>...waiting</p>

{:then data}
                  
    <div>
        {#each data as item}
        <h3 class="card-title underline">{item.id}</h3>

        <p class="card-text">
            {item.title}
            <span><button class="btn btn-danger">Delete</button></span>
        </p>

        {/each}

    </div>
    
{:catch error}
	<p>An error occurred!</p>

{/await}


                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>

<style>
    .underline{
        text-decoration: underline;
        color: rgb(44, 128, 255);
    }
    section{
        display: flex;
    }

    .card-text{
        display: flex;
        align-items: center;
    }
    .card-text span{
        margin-left: 50px;
    }

</style>
