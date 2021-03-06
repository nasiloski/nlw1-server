import knex from '../database/connection';
import { Request, Response } from 'express';

class ItemsController {
    async index(req: Request, res: Response){
        const items = await knex('items').select('*');

        const serializedItems = items.map(item => {
            return { 
                title: item.title, 
                image_url: `http://localhost:3333/uploads/${item.image}`,
                id: item.id
            }
        })
        return res.json(serializedItems);
    }
}
export default ItemsController;