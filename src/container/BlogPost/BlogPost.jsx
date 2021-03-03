import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post"

class BlogPost extends Component{
    state = {
        listArtikel: [] // variabel array digunakan untuk menyimpan data API
    }

    componentDidMount(){ //komponen untuk cek ketika component telah dimounting , maka panggil API
        fetch('https://jsonplaceholder.typicode.com/posts') // alamat URL API yg ingin kt ambil datanya
        .then(response => response.json()) //
        .then(jsonHasilAmbilDariAPI=>{
            this.setState({
                listArtikel: jsonHasilAmbilDariAPI
            })
        })
    }

    render(){
        return(
            <div className="post-artikel">
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => { //looping dan masukkan untuk setiap data yang ada di listartikel ke variabel artikel
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.title}/> // mapping data json dari API sesuai dg kategori

                    })
                }
            </div>
        )
    }
}

export default BlogPost;
