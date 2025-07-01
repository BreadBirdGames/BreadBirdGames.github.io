// place files you want to import through the `$lib` alias in this folder.
export const isActive = (tabName: string, pageNames: string[]) => {
    let response = "";

    // console.log(tabName);
    
    pageNames.forEach(name => {
        if (name == tabName) {
            response = "active";
        }
    });
    return response;
    // return tabName === pageName ? "active" : "";
};