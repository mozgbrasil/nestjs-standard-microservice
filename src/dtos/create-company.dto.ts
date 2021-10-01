import { IsNotEmpty } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
  readonly url: string;

  @IsNotEmpty()
  readonly body: string;

  @IsNotEmpty()
  readonly method: string;

  @IsNotEmpty()
  readonly headers: string;

  @IsNotEmpty()
  readonly timestamp: string;
}
