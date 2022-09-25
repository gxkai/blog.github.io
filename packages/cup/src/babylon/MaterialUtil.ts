import { DynamicTexture, Scene, StandardMaterial, Texture } from "babylonjs";
import {imagesPaths} from "../config/imagesPaths";

export class MaterialUtil {
  private static w = 192
  public static getMaterial = (scene: Scene, imagePath: string, materialName: string) => {
    const material = new StandardMaterial(materialName, scene);

    // static texture
    // this.createAndApplyStaticTexture(scene, material);

    // dynamic texture
    this.createAndApplyDynamicTexture(scene, material, imagesPaths.gz)

    return material;
  }

  private static createAndApplyStaticTexture = (scene: Scene, material: StandardMaterial) => {
    const texture = new Texture("textures/fachowiec-static.png", scene);
    material.diffuseTexture = texture;
  }

  private static createAndApplyDynamicTexture = (scene: Scene, material: StandardMaterial, imagePath: string) => {
    const textureSize = 4096
    const dynamicTexture = this.getDynamicTexture(scene, textureSize);
    material.diffuseTexture = dynamicTexture;

    this.drawImageOnDynamicTexture(imagePath, dynamicTexture)
  }

  private static getDynamicTexture = (scene: Scene, size: number) => {
    return new DynamicTexture("dynamic-texture", size, scene, false);
  }

  private static drawImageOnDynamicTexture = (imagePath: string, dynamicTexture: DynamicTexture) => {
    const textureSize = 4096;

    const context = dynamicTexture.getContext();
    context.fillStyle = "white";
    context.fillRect(0, 0, textureSize, textureSize);
    context.save();
    context.translate(313, 2480);
    context.rotate(-90 * Math.PI/180);
    context.translate(0,0);
    Object.values(imagesPaths).map((v, i) => {
      const image = new Image();
      image.src = v;
      image.onload = () => {
        context.drawImage(image, -1100+ i*this.w * 4, 0, this.w * 3, this.w * 3);
        dynamicTexture.update();
      }
    })
  }
}