import { autoinject, bindable, bindingMode } from 'aurelia-framework';
import { MDCTextField, MDCTextFieldCharacterCounter } from '@material/textfield';

import './text-input.scss';

@autoinject
export class TextInputCustomElement {
  constructor(private element: Element) {
  }

  /**
   * Gets or sets the material design text field element.
   */
  public textField: MDCTextField;

  /**
   * Gets or sets the value of the input.
   */
  @bindable({ bindingMode: bindingMode.twoWay })
  public value: any;

  /**
   * Gets or sets the disabled flag.
   * See also: https://www.w3schools.com/tags/att_input_disabled.asp.
   */
  @bindable({ bindingMode: bindingMode.toView })
  public disabled: boolean;

  /**
   * Gets or sets the input type.
   * Types color, date, datetime-local, email, file, image, month, number, password, range, search, tel, text, time, url, week.
   * See also: https://www.w3schools.com/tags/att_input_type.asp.
   */
  @bindable({ bindingMode: bindingMode.oneTime })
  public type: string = "text";

  /**
   * Gets or sets the required flag.
   * Adds the HTML5 required tag.
   * See also: https://www.w3schools.com/tags/att_input_required.asp.
   */
  @bindable({ bindingMode: bindingMode.oneTime })
  public required: boolean;

  /**
   * Gets or sets the counter indicator.
   * Shows the counter if true.
   */
  @bindable({ bindingMode: bindingMode.oneTime })
  public counter: boolean = false;

  /**
   * Gets or sets the inputs label.
   */
  @bindable({ bindingMode: bindingMode.oneTime })
  public label: string;

  /**
   * Gets or sets the inputs place holder text.
   * input types: text, search, url, tel, email, and password.
   * See also: https://www.w3schools.com/tags/att_input_placeholder.asp.
   */
  @bindable({ bindingMode: bindingMode.oneTime })
  public placeholder: string = "";

  /**
   * Gets or sets the max length of the input. 
   * See also: https://www.w3schools.com/tags/att_input_maxlength.asp.
   */
  @bindable({ bindingMode: bindingMode.oneTime })
  public maxlength: number = 1000;

  /**
   * Gets or sets the leading icon.
   * Material design icons are currently installed.
   * See also: https://material.io/resources/icons/?style=baseline.
   */
  @bindable({ bindingMode: bindingMode.oneTime })
  public leadingicon: string;

  /**
   * Gets or sets prefix text.
   */
  @bindable({ bindingMode: bindingMode.oneTime })
  public prefix: string;

  /**
   * Gets or sets suffix text.
   */
  @bindable({ bindingMode: bindingMode.oneTime })
  public suffix: string;

  /**
   * Gets or sets the trailing icon.
   * Material design icons are currently installed.
   * See also: https://material.io/resources/icons/?style=baseline.
   */
  @bindable({ bindingMode: bindingMode.oneTime })
  public trailingicon: string;

  /**
   * Switches the text inputs design from filled to outlined.
   */
  @bindable({ bindingMode: bindingMode.oneTime })
  public outlined: boolean = false;

  /**
   * Gets or sets the fields help text.
   */
  @bindable({ bindingMode: bindingMode.oneTime })
  public helptext: string;

  /**
   * Gets or sets the inputs max value.
   * input types: number, range, date, datetime-local, month, time and week.
   * See also: https://www.w3schools.com/tags/att_input_max.asp.
   */
  @bindable({ bindingMode: bindingMode.oneTime })
  public max?: number | Date;

  /**
 * Gets or sets the inputs step value.
 * input types: number, range, date, datetime-local, month, time and week.
 * See also: https://www.w3schools.com/tags/att_input_max.asp.
 */
  @bindable({ bindingMode: bindingMode.oneTime })
  public step?: number = 1;

  /**
   * Gets or sets the inputs max value.
   * input types: number, range, date, datetime-local, month, time and week.
   * See also: https://www.w3schools.com/tags/att_input_min.asp.
   */
  @bindable({ bindingMode: bindingMode.oneTime })
  public min?: number | Date;

  /**
   * Gets or sets the autocomplete flag.
   * input types: text, search, url, tel, email, password, datepickers, range, and color
   * See also: https://www.w3schools.com/tags/att_input_autocomplete.asp.
   */
  @bindable({ bindingMode: bindingMode.oneTime })
  public autocomplete: boolean;

  attached() {
    const textFieldElement = this.element.querySelector(".mdc-text-field");
    this.textField = new MDCTextField(textFieldElement);
  }
}
