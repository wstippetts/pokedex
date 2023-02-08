
export class pMonster {
  constructor(data) {
    this.name = data.name
    this.url = data.url

  }

  get WildTemplate() {
    return /*HTML*/`
  <div class="col-12 text-center">  
  <button class="btn btn-outline-success mb-3 w-75 fw-bold">${this.name}</button>
</div>`


  }

}