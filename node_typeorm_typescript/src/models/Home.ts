import { Produto } from '../entity/Produto'
import { Slider } from '../entity/Slider'
import { Blog } from '../entity/Blog'
import { Instagram } from '../entity/Instagram'
import { Categoria } from '../entity/Categorias'

export class Home{
    destaques: [Produto]
    sliders: [Slider]
    blog: [Blog]
    instagram: [Instagram]
    categoria: [Categoria]

    constructor(destaques1, slides1, blog1, instagram1, categoria1) {
        this.destaques = destaques1;
        this.sliders = slides1;
        this.blog = blog1;
        this.instagram = instagram1;
        this.categoria = categoria1;
    }
}
