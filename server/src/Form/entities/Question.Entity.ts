import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Answer from "../../Response/entities/Answer.Entity";
import Form from "./Form.Entity";

@Entity()
export default class Question {
  @PrimaryGeneratedColumn()
  question_id: number;

  @ManyToOne(() => Form, (form) => form.form_id, { nullable: false })
  @JoinColumn({ name: "fk_form_id", referencedColumnName: "form_id" })
  form: Form;

  @Column({
    type: "int",
  })
  question_order: number;

  @Column({
    type: "varchar",
    length: 15,
  })
  question_type: string;

  @Column({
    type: "varchar",
    length: 100,
    default: "제목 없음",
  })
  question_title: string;

  @Column({
    type: "boolean",
    default: false,
  })
  essential: boolean;

  @Column({
    type: "boolean",
    default: false,
  })
  etc_added: boolean;

  @Column({
    type: "json",
    nullable: true,
  })
  question_options: string[];

  @OneToMany(() => Answer, (answer) => answer.question)
  answers: Answer[];
}
