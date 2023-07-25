package com.thekitchendiaries.thekitchendiaries.repository;

import com.thekitchendiaries.thekitchendiaries.model.Recipes;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipes, Integer> {
}
