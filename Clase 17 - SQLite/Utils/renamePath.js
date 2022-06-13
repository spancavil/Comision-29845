import * as Filesystem from 'expo-file-system';

const renamePathAndMove = async (originalPath) => {
    const filename = originalPath.split('/').pop();
    console.log(filename);
    const path = Filesystem.documentDirectory + filename
    console.log(path);
    await Filesystem.moveAsync({
        from: originalPath,
        to: path
    })
    return path;
}

export default renamePathAndMove;