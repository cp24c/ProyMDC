import { Router } from "express";
import jwt from 'jsonwebtoken'
import { METABASE_SECRET_KEY, METABASE_SITE_URL } from '../../config/metabase.js';


const metabaseRouter = Router();

metabaseRouter.post('/', (req, res) => {

    const { resource, params } = req.body;
    if (!resource || !params) {
        return res .status(400).json({ error: 'Resource and params are required' });
    }

    const payload = {
        resource,
        params: params || {},
        exp: Math.floor(Date.now() / 1000) + (60 * 10),
    };
    
    const token = jwt.sign(payload, METABASE_SECRET_KEY);
    const type = Object.keys(resource)[0];
    const iframeUrl = `${METABASE_SITE_URL}/embed/${type}/${token}#bordered=true&titled=true`;
    res.json({ token,iframeUrl });
});

export default metabaseRouter;