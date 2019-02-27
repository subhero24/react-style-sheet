let check = new Function('try {return this===window;}catch(e){ return false;}');

export default check();
