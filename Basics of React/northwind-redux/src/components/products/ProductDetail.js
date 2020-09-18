import React from "react"
import SelecetInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput"

const ProductDetail = (
  { categories,
    product,
    onSave,
    onChange,
    errors }
) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        error={errors.productName}
      />

      <SelecetInput
        name="categoryId"
        className="Category"
        label="Kategori"
        value={product.categoryId || ""}
        defaultOptions="Seçininz"
        options={categories.map(category => ({
          value: category.id,
          text: category.categoryName
        }))}
        onChange={onChange}
        error={errors.categoryId}
      />

      <TextInput
        name="unitPrice"
        label="Fiyat"
        value={product.unitPrice}
        onChange={onChange}
        error={errors.unitPrice}
      />

      <TextInput
        name="quantityPerUnit"
        label="Birim Adeti"
        value={product.quantityPerUnit}
        onChange={onChange}
        error={errors.quantityPerUnit}
      />

      <TextInput
        name="unitsInStock"
        label="Stoktaki Birim Adeti"
        value={product.unitsInStock}
        onChange={onChange}
        error={errors.unitInStock}
      />

      <button type="submit" className="btn btn-success">
        Kaydet
      </button>
    </form>
  )
}

export default ProductDetail;