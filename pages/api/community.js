import { SiteClient } from 'datocms-client';

export default async function a (req, res){
    if (req.method === "POST"){
        const TOKEN = '419319793864e712613c3e079b0d88';

        //DatoCms Client
        const client = new SiteClient(TOKEN);
    
        const registro = await client.items.create({
            itemType: "967650", //ID do Model de "community" criado pelo Dato
            title: req.body.title,
            imageUrl: req.body.imageUrl
        });
    
        res.json({
            msg: 'success',
            registro: registro
        })
        return;
    }

    res.status(404).json({
        message: "GET não implementado."
    })
}