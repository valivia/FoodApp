import styles from './create.module.scss';
import { Input } from '../../components/interaction/input';
import { Button } from '../../components/interaction/button';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { mutate } from 'swr';
import { Wrapper } from '../../components/layout/wrapper';
import { fetchMutate } from '../../util/fetch';
import { Recipe } from '../../components/recipe';

function CreateDiary() {
    const [errors, setErrors] = useState([]);
    const { register, handleSubmit } = useForm();

    const [search, setSearch] = useState('');
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [recipe, setRecipe] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (!search) return setItems([]);
        fetch(`${process.env.REACT_APP_API_URL}/recipe/search/${search}`, { credentials: 'include' })
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result.filter(item => recipe?.id !== item.id));
                },
                (error) => {
                    setError(error);
                }
            )
    }, [search, recipe])


    const selectRecipe = (recipe) => {
        setRecipe(recipe);
        setSearch('');
    };

    const onSubmit = async (data) => {
        if (!recipe) return setErrors(['Please select a recipe']);

        data.recipeId = recipe.id;
        const { response } = await fetchMutate(`diary`, data, 'POST');
        if (!response) return;
        if (response.ok) {
            mutate(`${process.env.REACT_APP_API_URL}/diary`);
            return navigate('/diary');
        }
        setErrors([].concat(response.message));
    };

    return (
        <Wrapper className={styles.main}>
            <h2>Add to diary</h2>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)} >
                <Input
                    type='number'
                    placeholder="Meal size in grams"
                    {...register("quantity", { valueAsNumber: true, shouldUnregister: true })}
                />

                {/* Active recipe */}
                <section className={styles.recipe}>
                    <label>Active Recipe</label>
                    {recipe
                        ? <Recipe {...recipe} />
                        : <p>No recipe selected</p>
                    }
                </section>

                <hr />

                <Input
                    type='search'
                    label="Search for a recipe"
                    placeholder='E.g Lasagne'
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />

                {/* Search results */}
                <section className={styles.results}>
                    <label>Search Results</label>
                    {error && <p>{error.message}</p>}
                    {items.length === 0 && <p>No results</p>}
                    {items.map((item, index) => (
                        <Recipe key={index} {...item} displayIngredients={false} onClick={() => selectRecipe(item)} />
                    ))}
                </section>

                <ul className={styles.errors}>
                    {errors.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>

                <section className={styles.buttons}>
                    <Button type='submit' variant="primary">Add</Button>
                </section>
            </form>
        </Wrapper>
    )
}

export default CreateDiary