import { project } from '../models/project';

export const getProjects = async(_req: any, _res: any) => {
    try {
        const projects = await project.findAll();
        _res.json( projects );
    } catch (error: any) {
        return _res.status(500).json({ message: error.message });
    }


}

export const createProject = async(req: any, _res: any) => {
    const {name, priority, description} = req.body;
try {
    const newProject = await project.create({
        name,
        priority,
        description
    })
    
    _res.json( newProject )
} catch (error: any) {
    return _res.status(500).json({ message: error.message });
}

};